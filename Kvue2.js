class Vue extends EventTarget{
    constructor(opts){
        super();
        this.opts = opts;
        this._data = opts.data;
        this.observe(this._data);
        this.compile(opts.el);
    }
    observe(data){
        let keys = Object.keys(data);
        keys.forEach(key=>{
            let value = data[key];
            let dep = new Dep();
            Object.defineProperty(data,key,{
                configurable:true,
                enumerable:true,
                get(){
                    if(Dep.target){
                        dep.addSub(Dep.target);
                    }
                    return value;
                },
                set:newValue=>{
                    console.log(dep);
                    dep.notify(newValue);
                    value = newValue;
                }
            })
        })
    }
    compile(el){
        let ele = document.querySelector(el);
        this.compileNodes(ele);
    }
    compileNodes(ele){
        let childNodes = ele.childNodes;
        childNodes.forEach(node=>{
            if(node.nodeType===1){
                // console.log("元素");
                let attrs = node.attributes;
                console.log(attrs);
                [...attrs].forEach(attr=>{
                    let attrName = attr.name;
                    let attValue = attr.value;
                    if(attrName==="v-model"){
                        node.value = this._data[attValue];
                        node.addEventListener("input",e=>{
                            // 触发set
                            this._data[attValue] = e.target.value;
                        })
                    }

                    if(attrName==="v-html"){
                        //attName "v-html"
                        //attValue "contentTitle"
                        let htmlContent = this._data[attValue];
                        console.log("node,node.innerHTML",node,node.innerHTML)
                        node.innerHTML = htmlContent;
                    }
                })

                if(node.childNodes.length>0){
                    this.compileNodes(node);
                }
            }else if(node.nodeType===3){
                let textContent = node.textContent;
                let reg =  /\{\{\s*([^\{\}]+)\s*\}\}/g;
          
                if(reg.test(textContent)){
                    let dataKey = RegExp.dataKey;
                    node.textContent = node.textContent.replace(reg,this._data[dataKey]);

                    // 人为触发get 来收集 watcher
                    new Watcher(this._data,dataKey,(newValue)=>{
                        let oldValue = this._data[dataKey];
                        let reg = new RegExp(oldValue,"g");
                        node.textContent  = node.textContent.replace(reg,newValue);
                    });
                }
            }
        })

    }
}

// 管理器
class Dep{
    constructor(){
        this.subs = [];
    }
    // 收集订阅者
    addSub(sub){
        this.subs.push(sub);
    }
    // 发布
    notify(newValue){
        this.subs.forEach(sub=>{
            sub.update(newValue);
        })
    }
}

// 订阅者；
class Watcher{
    constructor(data,key,cb){
        // console.log("watcher")
        this.cb = cb;
        // 先定义 watcher实例this  然后在收集watcher
        Dep.target = this;
        data[key]; //触发get 收集watcher；
        Dep.target = null;
    }
    update(newValue){
        // console.log("更新了");
        this.cb(newValue);
    }
}

// 作业实现 v-html方法；

