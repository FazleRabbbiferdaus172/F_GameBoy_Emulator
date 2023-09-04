// GameBoy is a modified Zilog Z80

Z80 = {
    // Time clock: Z80 has 2 types of clock 
    _clock: {
        m: 0,
        t: 0
    },
    _r: {
        a: 0, b:0, c:0, d:0, e:0, h:0, l:0, f:0,    // 8-bit registers
        pc: 0, sp:0,                                // 16-bit registers
        m:0, t:0                                    // Clock for last instruction
    }
}