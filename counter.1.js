class counter extends HTMLElement{
    
    constructor(){
        super();
       const shadowDOMRoot=this.attachShadow({mode:"open"});        
     //   this.counterValue=0;
        this.counterValue=this.getAttribute("start");       
     
        this.incrementCounter();
      //  this.counterValue=2;
     //   setInterval(this.incrementCounter,1000);
       // console.log('--start test-'+this.start);
        
    }
    connectedCallback(){
        console.log('--connected call back---'+this.shadowRoot.innerHTML);
     //   this.counterValue=2;
     //   this.incrementCounter();
       // setInterval(this.incrementCounter,1000);
      //  const innerHTMLValue=`the counter value is test ${this.counterValue}`;
      //  this.shadowRoot.innerHTML=innerHTMLValue;
    }
    
    incrementCounter(){
      this.timeOut= setInterval(()=>
        {
            this.counterValue=Number(this.counterValue)+1;
           
        }
        ,1000);
      //  this.counterValue=4;
        console.log('value changed');
    }
    static get observedAttributes(){
        return ['start'];
    }
    attributeChangedCallback(name, oldVlaue,newValue){
      const innerHTMLValue=`<h2 >The counter value is : ${this.counterValue} </h2>`;
      this.shadowRoot.innerHTML=innerHTMLValue;
     // this.innerHTML=innerHTMLValue;
      if(this.counterValue>=10){
        clearInterval(this.timeOut);
      }
      console.log('--value changed--'+name);
      console.log('--value changed--'+oldVlaue);
      console.log('--value changed--'+newValue);
    }
    get counterValue(){
        console.log('getter');
        var startValue=this.getAttribute('start');
        return startValue;
       // this.counterValue=startValue;
    }
    set counterValue(val){
        console.log('--setting the counter value--'+val);
      //  this.counterValue=val;
        this.setAttribute('start',val);
        console.log('setting of att'+this.getAttribute('start'));
    }
}
customElements.define("counter-webcomponent",counter);