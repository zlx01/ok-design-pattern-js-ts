interface AC {
  outputAC(): number;
}

class AC110 implements AC {
  outputAC(): number {
    return 110;
  }
}

class AC220 implements AC {
  outputAC(): number {
    return 220;
  }
}

interface DC5Adapter {
  support(ac: AC): boolean;

  outputDC5(ac: AC): number;
}

class ChinaPowerAdapter implements DC5Adapter {
  private static voltage: number = 220;
  support(ac: AC): boolean {
    return ac.outputAC() === ChinaPowerAdapter.voltage;
  }

  outputDC5(ac: AC): number {
    const adapterInput = ac.outputAC();
    // 变压器
    const adapterOutput = adapterInput / 44;
    console.log("使用ChinaPowerAdapter变压适配器，输入AC:" + adapterInput + "V" + "，输出DC:" + adapterOutput + "V");
    return adapterOutput;
  }
}

class JapanPowerAdapter implements DC5Adapter {
  private static voltage: number = 110;
  support(ac: AC): boolean {
    return ac.outputAC() === JapanPowerAdapter.voltage;
  }

  outputDC5(ac: AC): number {
    const adapterInput = ac.outputAC();
    // 变压器
    const adapterOutput = adapterInput / 22;
    console.log("使用JapanPowerAdapter变压适配器，输入AC:" + adapterInput + "V" + "，输出DC:" + adapterOutput + "V");
    return adapterOutput;
  }
}

const adapters = [new ChinaPowerAdapter(), new JapanPowerAdapter()];

function getAdapter(ac: AC): DC5Adapter {
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

