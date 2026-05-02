"use strict";
class AC110 {
    outputAC() {
        return 110;
    }
}
class AC220 {
    outputAC() {
        return 220;
    }
}
class ChinaPowerAdapter {
    support(ac) {
        return ac.outputAC() === ChinaPowerAdapter.voltage;
    }
    outputDC5(ac) {
        const adapterInput = ac.outputAC();
        // 变压器
        const adapterOutput = adapterInput / 44;
        console.log("使用ChinaPowerAdapter变压适配器，输入AC:" + adapterInput + "V" + "，输出DC:" + adapterOutput + "V");
        return adapterOutput;
    }
}
ChinaPowerAdapter.voltage = 220;
class JapanPowerAdapter {
    support(ac) {
        return ac.outputAC() === JapanPowerAdapter.voltage;
    }
    outputDC5(ac) {
        const adapterInput = ac.outputAC();
        // 变压器
        const adapterOutput = adapterInput / 22;
        console.log("使用JapanPowerAdapter变压适配器，输入AC:" + adapterInput + "V" + "，输出DC:" + adapterOutput + "V");
        return adapterOutput;
    }
}
JapanPowerAdapter.voltage = 110;
const adapters = [new ChinaPowerAdapter(), new JapanPowerAdapter()];
function getAdapter(ac) {
    for (let i = 0; i < adapters.length; i++) {
        if (adapters[i].support(ac)) {
            return adapters[i];
        }
    }
    throw new Error("No adapter found");
}
const ac110 = new AC110();
let adapter = getAdapter(ac110);
adapter.outputDC5(ac110);
const ac220 = new AC220();
adapter = getAdapter(ac220);
adapter.outputDC5(ac220);
