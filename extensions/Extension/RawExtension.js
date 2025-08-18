// Name: Raw Extension
// ID: RawExtension
// Description: Use JavaScript inside your project.JavaScript Extension Knock off
// By: Tringlyman <https://github.com/Tringlyman>
// License: MIT
 
(async function(Scratch) {
    const variables = {};
    const blocks = [];
    const menus = {};


    if (!Scratch.extensions.unsandboxed) {
        alert("This extension needs to be unsandboxed to run!")
        return
    }

    
    class Extension {
        getInfo() {
            return {
                "menuIconURI": "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI2OS42NTA2NiIgaGVpZ2h0PSI2OS42NTA2NiIgdmlld0JveD0iMCwwLDY5LjY1MDY2LDY5LjY1MDY2Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjA1LjE3NDY3LC0xNDUuMTc0NjcpIj48ZyBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiPjxwYXRoIGQ9Ik0yMDcuNjc0NjcsMTgwYzAsLTE3Ljg1Mjc5IDE0LjQ3MjU0LC0zMi4zMjUzMyAzMi4zMjUzMywtMzIuMzI1MzNjMTcuODUyNzksMCAzMi4zMjUzMywxNC40NzI1NCAzMi4zMjUzMywzMi4zMjUzM2MwLDE3Ljg1Mjc5IC0xNC40NzI1NCwzMi4zMjUzMyAtMzIuMzI1MzMsMzIuMzI1MzNjLTE3Ljg1Mjc5LDAgLTMyLjMyNTMzLC0xNC40NzI1NCAtMzIuMzI1MzMsLTMyLjMyNTMzeiIgZmlsbD0iIzQwNDA0MCIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjUiLz48dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMjcuNDk1MDgsMjAyLjU1MjE4KSBzY2FsZSgwLjcwNzk0LDAuOTI1MjcpIiBmb250LXNpemU9IjQwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBmaWxsPSIjMjYyNjI2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZm9udC1mYW1pbHk9IlNhbnMgU2VyaWYiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIHRleHQtYW5jaG9yPSJzdGFydCI+PHRzcGFuIHg9IjAiIGR5PSIwIj4mbHQ7ICZndDs8L3RzcGFuPjwvdGV4dD48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjozNC44MjUzMzAwMDAwMDAwMTozNC44MjUzMzAwMDAwMDAwMS0tPg==",
                "id": "RawExtension",
                "name": "Raw Extension",
                "docsURI": "https://Tringlymans-Scratch-Extensions.vercel.app/Extension/RawExtension",
                "color1": "#3c3c3c",
                "color2": "#282828",
                "blocks": blocks,
                "menus": menus
            }
        }
    }
    
    blocks.push({
        blockType: Scratch.BlockType.LABEL,
        text: `MAIN`,
    });
    
    blocks.push({
        opcode: `rawType1`,
        blockType: Scratch.BlockType.COMMAND,
        text: `raw[code]`,
        arguments: {
            "code": {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "alert(\"Hello World!\")",
            },
        }
    });
    Extension.prototype[`rawType1`] = async (args, util) => {
        const code = args[`code`]
        const Raw = new Function(code)
        Raw();
    };

    blocks.push({
        opcode: `rawType2`,
        blockType: Scratch.BlockType.REPORTER,
        text: `raw [code]`,
        arguments: {
            "code": {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "return \"Hello World!\"",
            },
        }
    });
    Extension.prototype[`rawType2`] = async (args, util) => {
        const code = args[`code`]
        const Raw = new Function(code)
        
        return Raw()
    };

    blocks.push({
        opcode: `rawType3`,
        blockType: Scratch.BlockType.BOOLEAN,
        text: `is[code]?`,
        arguments: {
            "code": {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "return 1 == 1",
            },
        }
    });
    Extension.prototype[`rawType3`] = async (args, util) => {
        const code = args[`code`]
        const Raw = new Function(code)
        const result = Raw()

        switch (result) {
            case true:
                return true;
            case false:
                return false;
            
            default:
                break;
        }
    };

    blocks.push({
        blockType: Scratch.BlockType.LABEL,
        text: `JSON`,
    });

    blocks.push({
        opcode: `rawType4`,
        blockType: Scratch.BlockType.REPORTER,
        blockShape: Scratch.BlockShape.PLUS,
        text: `const [name] = {[value]}`,
        arguments: {
            "name": {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "object",
            },
            "value": {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "\"name\":\"Jack\"",
            },
        }
    });
    Extension.prototype[`rawType4`] = async (args, util) => {
        const name = args["name"]
        const value = args["value"]

        return `const ${name} = {${value}}`
    };

    blocks.push({
        opcode: `rawType5`,
        blockType: Scratch.BlockType.REPORTER,
        blockShape: Scratch.BlockShape.PLUS,
        text: `[name]: {[value]}`,
        arguments:{
            "name":{
                type: Scratch.ArgumentType.STRING,
                defaultValue: "object"
            },
            "value": {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "\"name\":\"Jack\"",
            },
        }
        }
    );
    Extension.prototype[`rawType5`] = async (args, util) => {
        const name = args["name"]
        const value = args["value"]

        return `${name}: {${value}}`
    }

    blocks.push({
        opcode: `rawType6`,
        blockType: Scratch.BlockType.REPORTER,
        blockShape: Scratch.BlockShape.PLUS,
        text: `{[value]}`,
        arguments: {
            "value": {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "\"name\":\"Jack\"",
            },
        }
    });
    Extension.prototype[`rawType6`] = async (args, util) => {
        const value = args["value"]

        return `{${value}}`
    };

    blocks.push({
        blockType: Scratch.BlockType.LABEL,
        text: `ARRAYS`,
    });

    blocks.push({
        opcode: `rawType7`,
        blockType: Scratch.BlockType.REPORTER,
        blockShape: Scratch.BlockShape.SQUARE,
        text: `const [name] = ［[value]］`,
        arguments: {
            "name": {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "array",
            },
            "value": {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "\"apple\"",
            },
        }
    });
    Extension.prototype[`rawType7`] = async (args, util) => {
        const name = args["name"]
        const value = args["value"]

        return  `const ${name} = [${value}]`
    };

    blocks.push({
        opcode: `rawType8`,
        blockType: Scratch.BlockType.REPORTER,
        blockShape: Scratch.BlockShape.SQUARE,
        text: `[name]:［[value]］`,
        arguments:{
            "name": {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "array",
            },
            "value": {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "\"apple \"",
            },
        }
    });
    Extension.prototype[`rawType8`] = async (args, util) => {
        const name = args["name"]
        const value = args["value"]

        return  `${name}: [${value}]`
    };

    blocks.push({
        opcode: `rawType9`,
        blockType: Scratch.BlockType.REPORTER,
        blockShape: Scratch.BlockShape.SQUARE,
        text: `［[value]］`,
        arguments: {
            "value": {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "\"apple\"",
            },
        }
    });
    Extension.prototype[`rawType9`] = async (args, util) => {
        const value = args["value"]

        return `[${value}]`
    };

    blocks.push({
        blockType: Scratch.BlockType.LABEL,
        text: "OTHER",
    });

    blocks.push({
        opcode: `rawType10`,
        blockType: Scratch.BlockType.REPORTER,
        blockShape: Scratch.BlockShape.LEAF,
        text: `[value1],[value2]`,
        arguments: {
            "value1": {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "\"apple \"",
            },
            "value2": {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "\"banana\"",
            },
        }
    });
    Extension.prototype[`rawType10`] = async (args, util) => {
        const value1 = args["value1"]
        const value2 = args["value2"]

        return `${value1}, ${value2}`
    };

    blocks.push({
        opcode: `rawType11`,
        blockType: Scratch.BlockType.REPORTER,
        blockShape: Scratch.BlockShape.LEAF,
        text: `cover[text] in [string style]`,
        arguments: {
            "text": {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Hello World!",
            },
            "string style": {
                type: Scratch.ArgumentType.STRING,
                menu: 'string style'
            },
        }
    });
    Extension.prototype[`rawType11`] = async (args, util) => {
        const text = args["text"]
        const stringStyle = args["string style"]

        return `${stringStyle}${text}${stringStyle}`
    }

    menus["string style"] = {
        acceptReporters: false,
        items: [{
            text: "string(\")",
            value: "\\\"",
        }, {
            text: "string(\')",
            value: "\\\'",
        }, {
            text: "template literal (\`)",
            value: "\\\`",
        }]
    };

        blocks.push({
        opcode: `rawType12`,
        blockType: Scratch.BlockType.REPORTER,
        blockShape: Scratch.BlockShape.LEAF,
        text: `raw join [value1]+[value2]`,
        arguments: {
            "value1": {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "apple ",
            },
            "value2": {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "banana",
            },
        }
    });
    Extension.prototype[`rawType12`] = async (args, util) => {
        const value1 = args["value1"]
        const value2 = args["value2"]

        return `${value1} + ${value2}`
    };

    blocks.push({
        opcode: `rawType13`,
        blockType: Scratch.BlockType.REPORTER,
        blockShape: Scratch.BlockShape.LEAF,
        text: `raw [value1][and/or][value2]`,
        arguments: {
            "value1": {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "1 === 1",
            },
            "and/or": {
                type: Scratch.ArgumentType.STRING,
                menu: 'and/or'
            },
            "value2": {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "\"1\" === 1",
            },
        }
    });
    Extension.prototype[`rawType13`] = async (args, util) => {
        const value1 = args["value1"]
        const andOr = args["and/or"]
        const value2 = args["value2"]

        return `${value1} ${andOr} ${value2}`
    };

    menus["and/or"] = {
        acceptReporters: false,
        items: [{
                text: "and",
                value: "&&",
            },  {
                text: "or",
                value: "||",
            }]
    }

    blocks.push({
        opcode: `rawType14`,
        blockType: Scratch.BlockType.REPORTER,
        blockShape: Scratch.BlockShape.LEAF,
        text: `raw not [value]`,
        arguments: {
            "value": {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "1 == 1",
            },
        }
    });
    Extension.prototype[`rawType14`] = async (args, util) => {
        const value = args[`value`]

        return `!(${value})`
    };

    Scratch.extensions.register(new Extension());
})(Scratch);
