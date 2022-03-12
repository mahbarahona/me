class Accelerometer extends HTMLElement{
    constructor(){
        super()


        const _style = document.createElement('style')
        const _template = document.createElement('template')

        _style.innerHTML = this.createStyles()

        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(_style)
        const data = {
            x:1,
            y:1,
            z:1,
        }
        _template.innerHTML = this.createTemplate(data)
        this.shadowRoot.appendChild(_template.cloneNode(true))

    
    
        
        
    }

    createStyles(){
        return `

            *{
                margin:0;
            }

            .container{
                background:blue;
                width:100px;
                min-height:100px;
            }
        `
    }
    createTemplate(data){
        const {x,y,z} = data
        return `
        <section class="container">
            <p class="">x:${x}</p>
            <p class="">x:${y}</p>
            <p class="">x:${z}</p>
        </section>
        `
    }


}

customElements.define('acc-meter',Accelerometer)