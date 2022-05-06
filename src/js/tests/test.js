import checkHealth from "../app";

test ("verification of healthy", () => {
    expect( checkHealth ({ name: "Маг", health: 90 })).toBe("healthy");
});

test ("verification of wounded", () => {
    expect( checkHealth ({name: "Маг", health: 45})).toBe("wounded")
})

test ("verification of critical", () => {
    expect( checkHealth ({name: "Маг", health: 5})).toBe("critical")
})