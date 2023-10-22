"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[71],{5071:function(n,e,t){t.r(e),t.d(e,{default:function(){return sn}});var r,i,o,a,s,d,c,l,p,u,x,m,h,b,g,f,Z,j,w=t(2791),P=t(9434),v=t(4270),k=t(3634),y=t(6916),C=function(n){return n.contacts.isLoading},N=function(n){return n.contacts.items},L=function(n){return n.filter},_=(0,y.P1)([N,L],(function(n,e){return console.log("Calculating visible tasks"),n.filter((function(n){return n.name.toLowerCase().trim().includes(e.toLowerCase())}))})),q=t(168),z=t(5867),I=z.ZP.ul(r||(r=(0,q.Z)(["\n  margin-top: 15px;\n"]))),A=z.ZP.li(i||(i=(0,q.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  margin-bottom: 6px;\n"]))),J=z.ZP.button(o||(o=(0,q.Z)(["\n  color: white;\n  border: 1px solid red;\n  background-color: transparent;\n  padding: 4px;\n\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    background-color: red;\n  }\n"]))),S=z.ZP.p(a||(a=(0,q.Z)(["\n  width: 48%;\n  background-color: white;\n  padding-left: 8px;\n  padding-top: 2px;\n  padding-bottom: 5px;\n  color: black;\n"]))),B=z.ZP.p(s||(s=(0,q.Z)(["\n  width: 48%;\n  background-color: white;\n  padding-top: 2px;\n  padding-bottom: 5px;\n  padding-left: 8px;\n  color: black;\n"]))),F=z.ZP.li(d||(d=(0,q.Z)(["\n  display: flex;\n  align-items: center;\n  /* gap: 10px; */\n  margin-bottom: 8px;\n"]))),K=z.ZP.p(c||(c=(0,q.Z)(["\n  width: 50%;\n  background-color: rgb(182, 218, 248);\n  text-align: center;\n  font-size: 18px;\n  font-weight: 500;\n  color: black;\n  padding-top: 10px;\n  padding-bottom: 10px;\n"]))),R=t(184),D=function(){var n=(0,P.v9)(_),e=(0,P.I0)();return console.log(n),(0,R.jsxs)(I,{children:[(0,R.jsxs)(F,{children:[(0,R.jsx)(K,{children:"Name"}),(0,R.jsx)(K,{children:"Number"})]}),n.map((function(n){var t=n.id,r=n.name,i=n.number;return(0,R.jsxs)(A,{children:[(0,R.jsx)(S,{children:r}),(0,R.jsx)(B,{children:i}),(0,R.jsx)(J,{type:"button",onClick:function(){e((0,k.GK)(t))},children:"Delete"})]},t)}))]})},E=t(1413),G=t(5705),M=t(5218),V=(0,z.ZP)(G.l0)(l||(l=(0,q.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  padding: 5px 0 5px;\n"]))),W=z.ZP.label(p||(p=(0,q.Z)(["\n  /* display: flex; */\n"]))),Y=z.ZP.p(u||(u=(0,q.Z)(["\n  color: white;\n"]))),H=(0,z.ZP)(G.gN)(x||(x=(0,q.Z)(["\n  width: 150px;\n  border-radius: 8px;\n  border: 1px solid rgb(31, 51, 50);\n"]))),O=z.ZP.button(m||(m=(0,q.Z)(["\n  width: 120px;\n  height: 35px;\n  color: white;\n  font-size: 16px;\n  font-weight: 500;\n  background-color: transparent;\n  padding: 2px;\n  border-radius: 8px;\n  border: 1px solid white;\n  margin-top: 15px;\n\n  &:hover {\n    color: #00bfa6;\n    background-color: white;\n  }\n"]))),Q=(0,z.ZP)(G.Bc)(h||(h=(0,q.Z)(["\n  width: 200px;\n  color: red;\n  font-size: 10px;\n"]))),T=t(6727),U=T.Ry().shape({name:T.Z_().min(1,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d Artagnan").required("Please enter a name"),number:T.Z_().min(7,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required("Please enter the number")}),X=function(){var n=(0,P.v9)(N),e=(0,P.I0)();return(0,R.jsx)(G.J9,{initialValues:{name:"",number:""},onSubmit:function(t,r){if(n.find((function(n){return n.name.toLowerCase().trim()===t.name.toLowerCase().trim()||n.number.trim()===t.number.trim()})))return M.ZP.error("A contact with that name or number already exists");e((0,k.uK)((0,E.Z)({},t))),r.resetForm(),M.ZP.success("Contact added successfully",{duration:3e3})},validationSchema:U,children:(0,R.jsxs)(V,{children:[(0,R.jsxs)(W,{children:[(0,R.jsx)(Y,{children:"Name"}),(0,R.jsx)(H,{type:"text",name:"name"}),(0,R.jsx)(Q,{name:"name",component:"div"})]}),(0,R.jsxs)(W,{children:[(0,R.jsx)(Y,{children:"Number"}),(0,R.jsx)(H,{type:"tel",name:"number"}),(0,R.jsx)(Q,{name:"number",component:"div"})]}),(0,R.jsx)(O,{type:"submit",children:"Create contact"})]})})},$=z.ZP.label(b||(b=(0,q.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),nn=z.ZP.div(g||(g=(0,q.Z)(["\n  padding: 10px 0 15px;\n"]))),en=z.ZP.input(f||(f=(0,q.Z)(["\n  width: 25%;\n  border-radius: 8px;\n  border: 1px solid rgb(31, 51, 50);\n"]))),tn=z.ZP.h4(Z||(Z=(0,q.Z)(["\n  color: white;\n"]))),rn=t(3165),on=function(){var n=(0,P.v9)(L),e=(0,P.I0)();return(0,R.jsx)(nn,{children:(0,R.jsxs)($,{children:[(0,R.jsx)(tn,{children:"Search by name"}),(0,R.jsx)(en,{type:"text",name:"filter",value:n,onChange:function(n){e((0,rn.W)(n.target.value.toLowerCase().trim()))}})]})})},an=z.ZP.div(j||(j=(0,q.Z)(["\n  background-color: #00bfa6;\n  height: 100vh;\n  padding: 20px;\n"])));function sn(){var n=(0,P.I0)(),e=(0,P.v9)(C);return(0,w.useEffect)((function(){n((0,k.NJ)())}),[n]),(0,R.jsxs)(an,{children:[(0,R.jsx)(v.q,{children:(0,R.jsx)("title",{children:"Your contacts"})}),(0,R.jsx)("div",{children:e&&"Request in progress..."}),(0,R.jsx)(X,{}),(0,R.jsx)(on,{}),(0,R.jsx)(D,{})]})}}}]);
//# sourceMappingURL=71.d9f242b3.chunk.js.map