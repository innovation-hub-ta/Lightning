import { Lightning } from "@lightningjs/sdk";
import Character from "./character";

export default class Characters extends Lightning.Component {

    set items(items) {
        this.children = items.map((item, index) => {
            return {
                List: {
                    type: Character,
                    x: index * 70, //item width + 20px margin
                    item //passing the item as an attribute
                }
            }

        });
    }



}