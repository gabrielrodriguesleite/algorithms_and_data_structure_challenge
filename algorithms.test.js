const { filter, calc, newID } = require("./algorithms.js")

const TEST_ARRAY = ["a", 10, "b", "hola", 122, 15]
const TEST_ARRAY2 = ["bye", 324, "d", "X", 6534, "hello", 123, "e", "3", 765]

const TEST_N_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const TEST_N_ARRAY2 = [324, 6534, 123, 765]

describe("===== 1 - Teste da função filtro: =====", () => {
  test("retorna um array de letras", () => {
    expect(filter(TEST_ARRAY, "letters")).toEqual(["a", "b"])
    expect(filter(TEST_ARRAY2, "letters")).toEqual(["d", "X", "e"])
  })

  test("retorna um array de números:", () => {
    expect(filter(TEST_ARRAY, "numbers")).toEqual([10, 122, 15])
    expect(filter(TEST_ARRAY2, "numbers")).toEqual([324, 6534, 123, 765])
  })

  test("retorna o maior número:", () => {
    expect(filter(TEST_ARRAY, "highest")).toEqual(122)
    expect(filter(TEST_ARRAY2, "highest")).toEqual(6534)
  })

  test("retorna uma string explicando o parametro \"type\" da função.", () => {
    expect(filter(TEST_ARRAY, "")).toEqual("Use \"letters\", \"numbers\" ou \"highest\" in the type argument."
    )
  })
})

describe("===== 2 - Testes para calc: =====", () => {
  test("\"addition\" soma os numeros do array:", () => {
    expect(calc.addition(TEST_N_ARRAY)).toEqual(45)
    expect(calc.addition(TEST_N_ARRAY2)).toEqual(7746)
  })

  test("\"subtraction\" subtrai os numeros do array:", () => {
    expect(calc.subtraction(TEST_N_ARRAY)).toEqual(5)
    expect(calc.subtraction(TEST_N_ARRAY2)).toEqual(6852)
  })

  test("\"multiplication\" multiplica os numeros do array:", () => {
    expect(calc.multiplication(TEST_N_ARRAY)).toEqual(362880)
    expect(calc.multiplication(TEST_N_ARRAY2)).toEqual(199200620520)
  })

  test("\"division\" divide \"a\" por \"b\":", () => {
    expect(calc.division(122, 2)).toEqual(61)
    expect(calc.division(6574, 2)).toEqual(3287)
  })

  test("\"division\" lança um erro quando \"b\" é 0:", () => {
    expect(() => calc.division(122, 0)).toThrow(new Error("0 division error."))
  })
})

describe("===== 3 - Testes para newID: =====", () => {
  const IDS = "1234567".split("").map(i => newID())

  test.each(IDS)("a função deve retornar uma string contendo 4 grupos de 4 \n\tcaracteres alfanuméricos separados por traço \"-\".",
    (i) => {
      expect(
        /[a-zA-Z0-9]{4}[-][a-zA-Z0-9]{4}[-][a-zA-Z0-9]{4}[-][a-zA-Z0-9]{4}/
        .test(i)
      )
      .toBeTruthy()
    })

  test("a função deve retornar valores aleatórios.", () => {
    for (i in IDS) {
      if (i != IDS[0]) {
        expect(IDS[i]).not.toEqual(IDS[i - 1])
      }
    }
  })
})