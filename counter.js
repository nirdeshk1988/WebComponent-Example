class counter extends HTMLElement{
    
    constructor(){
      super();
      //const shadowDOMRoot=this.attachShadow({mode:"open"});        
      this.counterValue=this.getAttribute("start");       
      this.incrementCounter();  
    }
    
    incrementCounter(){
      this.timeOut= setInterval(()=>
        {
            this.counterValue=Number(this.counterValue)+1;
           
       }
        ,1000);
        console.log('value changed');
    }
    static get observedAttributes(){
        return ['start'];
    }
    attributeChangedCallback(name, oldVlaue,newValue){
      const innerHTMLValue=`<h2 >The counter value is : ${this.counterValue} </h2>`;
    //  this.shadowRoot.innerHTML=innerHTMLValue;
      this.innerHTML=innerHTMLValue;
      if(this.counterValue>=10){
        clearInterval(this.timeOut);
      }
    }
    get counterValue(){
        console.log('getter');
        var startValue=this.getAttribute('start');
        return startValue;
    }
    set counterValue(val){
        this.setAttribute('start',val);
    }
}
customElements.define("counter-webcomponent",counter);