"use strict";(()=>{var e={};e.id=227,e.ids=[227],e.modules={20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},24671:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>m,patchFetch:()=>h,requestAsyncStorage:()=>d,routeModule:()=>p,serverHooks:()=>x,staticGenerationAsyncStorage:()=>l});var s={};r.r(s),r.d(s,{POST:()=>a});var n=r(49303),u=r(88716),o=r(60670),i=r(87070);async function a(e){try{let{code:t,language:r,problemId:s,testCases:n}=await e.json(),u="",o=[];try{"javascript"===r?(n.map((e,t)=>`
            try {
              const result = ${function(e,t){switch(e){case 1:return`twoSum([${t.nums.join(",")}], ${t.target})`;case 2:return`reverseString([${t.s.map(e=>`"${e}"`).join(",")}])`;case 3:return`isValid("${t.s}")`;default:return"functionName()"}}(s,e.input)};
              results.push({
                testCase: ${t+1},
                input: ${JSON.stringify(e.input)},
                expected: ${JSON.stringify(e.expected)},
                actual: result,
                passed: JSON.stringify(result) === JSON.stringify(${JSON.stringify(e.expected)})
              });
            } catch (error) {
              results.push({
                testCase: ${t+1},
                input: ${JSON.stringify(e.input)},
                expected: ${JSON.stringify(e.expected)},
                actual: 'Error: ' + error.message,
                passed: false
              });
            }
          `).join(""),o=c(s,t,n),u="Code executed successfully"):(o=c(s,t,n),u=`${r} code executed (simulated)`)}catch(e){u=`Runtime Error: ${e}`,o=n.map((e,t)=>({testCase:t+1,input:e.input,expected:e.expected,actual:"Runtime Error",passed:!1}))}return i.NextResponse.json({output:u,testResults:o,success:!0})}catch(e){return console.error("Code execution error:",e),i.NextResponse.json({error:"Failed to execute code",output:"Execution failed"},{status:500})}}function c(e,t,r){let s=[];for(let n=0;n<r.length;n++){let u=r[n],o=!1,i=null;1===e?t.includes("for")&&(t.includes("map")||t.includes("{}")||t.includes("indexOf"))?i=(o=Math.random()>.3)?u.expected:[0,0]:(o=!1,i="Incomplete solution"):2===e?t.includes("reverse")||t.includes("for")&&t.includes("swap")||t.includes("two pointers")?i=(o=Math.random()>.2)?u.expected:u.input.s:(o=!1,i="Incomplete solution"):3===e&&(t.includes("stack")||t.includes("push")||t.includes("pop")||t.includes("[]")?i=(o=Math.random()>.25)?u.expected:!u.expected:(o=!1,i="Incomplete solution"));let a=null,c=null;o||(1===e?(a="Check your algorithm logic",c="Try using a hash map to store numbers and their indices"):2===e?(a="Array not properly reversed",c="Use two pointers approach: left and right"):3!==e||(a="Parentheses validation failed",c="Use a stack to track opening brackets")),s.push({testCase:n+1,input:u.input,expected:u.expected,actual:i,passed:o,error:a,hint:c})}return s}let p=new n.AppRouteRouteModule({definition:{kind:u.x.APP_ROUTE,page:"/api/execute-code/route",pathname:"/api/execute-code",filename:"route",bundlePath:"app/api/execute-code/route"},resolvedPagePath:"c:\\Users\\aparna.j.kumari\\Documents\\AI_Resume_Boost\\ResumeBoost\\app\\api\\execute-code\\route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:d,staticGenerationAsyncStorage:l,serverHooks:x}=p,m="/api/execute-code/route";function h(){return(0,o.patchFetch)({serverHooks:x,staticGenerationAsyncStorage:l})}},49303:(e,t,r)=>{e.exports=r(30517)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[380,70],()=>r(24671));module.exports=s})();