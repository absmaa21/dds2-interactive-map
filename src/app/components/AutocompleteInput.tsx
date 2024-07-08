import React, { useEffect, useState, useRef } from 'react';
import { Style } from "@/pojos/style";
import enterIcon from "@/assets/enter.png";

interface Props {
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    handleSubmit?: (item: string) => void,
    maxHeight?: number,
    suggestionValues?: string[],
    setSelectedItems?: React.Dispatch<React.SetStateAction<string[]>>,
}

const radius = 8;

function AutocompleteInput(props: Props) {
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [chosenIndex, setChosenIndex] = useState(0);
    const suggestionRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (props.value) {
            const filteredItems = props.suggestionValues?.filter(item =>
                item.toLowerCase().includes(props.value.toLowerCase())
            ) || [];
            setSuggestions(filteredItems);
        } else {
            setSuggestions([]);
        }
    }, [props.value, props.suggestionValues]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        props.setValue(e.target.value);
    }

    function handleSuggestionClick(suggestion: string) {
        if (!props.setSelectedItems) return;
        props.setSelectedItems(prev => [...prev, suggestion]);
        setSuggestions([]);
        props.setValue('');
    }

    const suggestionsStyle = {
        ...suggestionss,
        maxHeight: props.maxHeight ?? 150,
    };

    function handleSubmit() {
        if (!props.suggestionValues || !props.handleSubmit) return;
        props.suggestionValues.map(item => {
            if (item === props.value && props.handleSubmit) {
                props.handleSubmit(props.value);
                props.setValue('');
            }
        });
    }

    function handleIndexChange(index: number) {
        let newIndex = index;
        if (index >= suggestions.length) newIndex = 0;
        if (index < 0) newIndex = suggestions.length - 1;
        setChosenIndex(newIndex);

        if (suggestionRefs.current[newIndex]) {
            suggestionRefs.current[newIndex]!.scrollIntoView({
                behavior: 'auto',
                block: 'center',
            });
        }
    }

    function handleKeyPress(e: React.KeyboardEvent<HTMLDivElement>) {
        if (e.key === "Enter") {
            handleSuggestionClick(suggestions[chosenIndex]);
            return;
        }
        if (e.key === "Tab" || e.key === "ArrowDown") {
            e.preventDefault();
            handleIndexChange(chosenIndex + 1);
            return;
        }
        if (e.key === "ArrowUp") {
            handleIndexChange(chosenIndex - 1);
            return;
        }
        handleIndexChange(0);
    }

    return (
        <div style={container} onKeyDown={handleKeyPress}>
            <input title={'Search item'} type={'search'} value={props.value} style={inputStyle}
                   onChange={handleChange} onKeyDown={e => e.key === 'Enter' && handleSubmit()} />
            {props.handleSubmit && (
                <img src={enterIcon.src} alt={'Enter'} style={enterStyle} onClick={handleSubmit} />
            )}

            {suggestions.length > 0 && (
                <div style={suggestionsStyle}>
                    {suggestions.map((suggestion, index) => (
                        <div
                            key={index}
                            ref={el => {suggestionRefs.current[index] = el}}
                            style={index === chosenIndex ? { ...suggestionStyle, ...selectedSuggestion } : suggestionStyle}
                            onClick={() => handleSuggestionClick(suggestion)}
                        >
                            {suggestion}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

const container: React.CSSProperties = {
    display: 'flex',
    width: '100%',
};

const inputStyle: React.CSSProperties = {
    width: '100%',
    fontSize: 16,
    lineHeight: 2,
    borderWidth: 0,
    borderRadius: radius,
    paddingInline: 4,
    backgroundColor: Style.btnBg,
};

const suggestionss: React.CSSProperties = {
    position: 'absolute',
    marginTop: 38,
    border: "1px solid #aaa",
    overflowY: 'auto',
    zIndex: 199,
    userSelect: 'none',
    backgroundColor: Style.bgPrimary,
};

const suggestionStyle: React.CSSProperties = {
    cursor: 'pointer',
    padding: 4,
    userSelect: 'none',
};

const selectedSuggestion: React.CSSProperties = {
    backgroundColor: '#fff5',
};

const enterStyle: React.CSSProperties = {
    cursor: 'pointer',
    aspectRatio: 1,
    width: 32,
    borderRadius: radius,
    marginLeft: 4,
    backgroundColor: Style.bgSecondary,
};

export default AutocompleteInput;
