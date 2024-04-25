import Companies_button from "./Companies_button";

export function Widget() {
        const buttons = [];
        const btn_names = ["Remote", "MNC", "Banking", "Supply Chain", "Data Science", "Software", "Project Mg", "Internship", "Marketing", "sales", "engineering"]
        for (let i = 0; i < btn_names.length; i++) {
                buttons.push(
                        <Companies_button name={btn_names[i]} key={i} />
                );
        }
        return (
                <div className="grid grid-flow-col grid-rows-2 p-10 *:my-2 *:mx-auto">
                        {buttons}
                </div>
        )
}