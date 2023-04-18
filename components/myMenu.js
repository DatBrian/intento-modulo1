// export class myMenu extends HTMLElement {
//     constructor() {
//         super();
//         this.attachShadow({ mode: "open" });
//     }
//     connectedCallback() {
//         this.shadowRoot.innerHTML = /*html*/`
//         <styl rel="stylesheet">
//             @import "./style/myMenu.css";
//         </styl>
//         <div class="h7">${this.texto()}</div>
//         `;
//     }
//     texto() {
//         return `Texto h7`;
//     }
// }

// customElements.define(`my-h7`, myMenu);
export default {
    newObject() {
        let newObject = {
            texto() {
                return `Texto h7`;
            },

            connectedCallback() {
                this.attachShadow({ mode: "open" });
                this.shadowRoot.innerHTML = /*html*/`
                <style>
                    @import "./style/myMenu.css";
                </style>
                <div class="h7">${this.texto()}</div>
                `;
            }
        };

        function myH7() {
            let prototype = Object.create(HTMLElement.prototype);

            Object.assign(prototype, newObject);

            prototype.constructor = myH7;

            customElements.define("my-h7", prototype);

        }
    }
}