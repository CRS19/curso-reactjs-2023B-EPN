interface persona {
  nombreCompleto: string;
  edad: number;
  casado: boolean;
  estadoCivil: string;
  tieneCasa: boolean;
  mascotas: null | string[];
}

const fn_ = () => {
  const tipo_string: string = "20";
  const tipo_numbe: number = 10; // NUMBER
  const tipo_boolean: boolean = true; // BOOLEAN
  const Juan: persona = {
    nombreCompleto: "Juan Ramirez",
    edad: 25,
    casado: false,
    estadoCivil: "soltero",
    mascotas: null,
    tieneCasa: true,
  };

  const ramiro: persona = {
    nombreCompleto: "Ramiro Ramirez",
    edad: 25,
    casado: false,
    estadoCivil: "soltero",
    mascotas: ["perro", "gato"],
    tieneCasa: true,
  };

  const person2: persona = {
    nombreCompleto: "Juan Ramirez",
    edad: 25,
    casado: false,
    estadoCivil: "soltero",
    mascotas: null,
    tieneCasa: true,
  };

  const tipo_null = null; // NULL
  const tipo_undefined = undefined; // UNDEFINED

  console.log(Juan.tieneCasa);
};

fn_();
