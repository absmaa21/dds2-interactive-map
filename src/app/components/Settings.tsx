import React from 'react';
import "@/app/css/Settings.css"
import data from "@/pojos/data";
import faq, {discordLink} from "@/pojos/faq";

function Settings() {
    return (
        <div className={"container"}>
            {faq.map(faq => (
                <div className={"faq-container"}>
                    <h4>{faq.question}</h4>
                    <p>
                        {faq.answer.split("Discord").map((str, i) => {
                            if (i < faq.answer.split("Discord").length - 1)
                                return <>{str} <a target={"_blank"} href={discordLink}>Discord</a></>
                            return str;
                        })}
                    </p>
                </div>
            ))}

            <p>Version: <span>{data.version}</span></p>
            <p>Game version: <span>{data["game-version"]}</span></p>
            <p>Last updated: <span>{new Date(data["last-update"]).toLocaleString()}</span></p>
        </div>
    );
}

export default Settings;
