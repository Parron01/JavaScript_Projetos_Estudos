class ValidaCPF {
  //Método Construtor
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      enumerable: true,
      get: function () {
        return cpfEnviado.replace(/\D+/g, "");
      },
    });
  }
  //Funções e Métodos
  //Funçao valida
  valida() {
    if (typeof this.cpfLimpo === "undefined") return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCPF = cpfParcial + digito1 + digito2;

    return novoCPF === this.cpfLimpo;
  }
  //Funçao que cria os 2 digitos finais do CPF
  criaDigito(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
      ac += regressivo * Number(val);
      regressivo--;
      return ac;
    }, 0);

    const digito = 11 - (total % 11);

    return digito > 9 ? "0" : String(digito);
  }

  //Função para apenas conferir se o CPF não é uma sequencia de numeros iguais.
  isSequencia() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
  };
}

const cpf = new ValidaCPF("070.987.720-03");

if(cpf.valida()) console.log("CPF Válido");
else console.log("CPF Inválido");