 # Provider 

 Redux သည် predictable state container ဖြစ်သည်။
 Provider သည် ထို state container အား react app ဖြင့် ချိတ်ဆက်ပေးခြင်း ဖြစ်သည်။
 components များသည် react app ထဲတွင် အလုပ်လုပ်ခြင်း ဖြစ်သည်။
 သို့ဖြစ်ရာ provider မှ ချိတ်ဆက်ပေးသော state များကို index.js မှ တစ်ဆင့် လက်ခံရရှိသည်။
 state များကို တစ်နေရာထဲတွင် စုစည်းထားခြင်းဖြင့် state management ပိုင်းကို လွယ်ကူ ရိုးရှင်းစေခြင်းသည် redux purpose ဖြစ်သည်။

# Reducer

Reducer သည် state နှင့် action ကို request လုပ်၍ new state ကို return ပြန်ပေးသော regular function တစ်ခု ဖြစ်သည်။
state and action parameter နှစ်ခု ကို ရယူ၍ new state ကို  return ပြန်ခြင်းဖြစ်သည်။

# useSelector

useSelector သည် container မှ state ကို တိုက်ရိုက်ရယူ နိုင်ခြင်း ဖြစ်သည်။
သို့သော် state ကို တိုက်ရိုက် ယူခြင်း သည် state နှင့် ui ရောထွေးမှုများ ဖြစ်လာနိုင်စေသည်။
state အတွက် custom hook များ တည်ဆောက်ခြင်းသည် state ပိုင်းတွင် ရိုးရှင်းမှုနှင့် maintain ပိုင်းတွင် အားသာမှု များ ရရှိနိုင်သည်။
ထပ်ဖန်တလဲလဲ သုံးရနိုင်သော state များကို custom hook များဖြင့် အသုံးပြုသင့်ပါသည်။

# useDispatch

useDispatch သည် reducer မှ request လုပ်ထားသော parameter action ဖြစ်သည်။
reducer သည် formula တစ်ခု အနေဖြင့် လုပ်ဆောင်ရာ second parameter ဖြစ်သော action ပိုင်းကို useDispatch ဖြင့် 
effect ဖြစ်စေသည်။
ပေါင်းခြင်းကို ပြုလုပ်ပါက add action type စသည်ဖြင့် action type အမျိုးအစား ကို ပေးရသည်။

