| CT-0003          | Api de cupons              |
| ---------------- | -------------------------- |
| Situação         | Concluído                  |
| Projeto          | EBAC-SHOP                  |
| Versões afetadas | 1.0                        |

</br>
<h3>Descrição dos cenários em BDD</h3>
<h4>GET - Listagem de Cupons</h4>
<dl>
  </br>
  <dt>Cenário: Listar todos os cupons</dt>
  </br>
  <dd>Dado que é realizada uma requisição GET para a rota de listagem de cupons</dd>
  <dd>Então deve retornar uma lista com todos os cupons cadastrados</dd>
</dl>
<dl>
  </br>
  <dt>Cenário: Listar cupom por ID válido</dt>
  </br>
  <dd>Dado que é realizada uma requisição GET para a rota de listagem de cupons fornecendo um ID válido</dd>
  <dd>Então deve retornar as informações do cupom correspondente ao ID fornecido</dd>
</dl>
<dl>
  </br>
  <dt>Cenário: Listar cupom por ID inválido</dt>
  </br>
  <dd>Dado que é realizada uma requisição GET para a rota de listagem de cupons fornecendo um ID inválido</dd>
  <dd>Então deve retornar uma mensagem de erro indicando que o cupom não foi encontrado</dd>
</dl>
<h4>POST - Cadastro de Cupons</h4>
<dl>
  </br>
  <dt>Cenário: Cadastro de cupom válido</dt>
  </br>
  <dd>Dado que é realizada uma requisição POST para a rota de cadastro de cupons com todos os campos obrigatórios preenchidos corretamente</dd>
  <dd>Então deve cadastrar o cupom com sucesso e retornar as informações do novo cupom</dd>
</dl>
<dl>
  </br>
  <dt>Cenário: Cadastro de cupom com nome repetido</dt>
  </br>
  <dd>Dado que se tenta cadastrar um cupom com um nome que já existe</dd>
  <dd>Então deve retornar uma mensagem de erro indicando que o nome do cupom já está em uso</dd>
</dl>
<dl>
  </br>
  <dt>Cenário: Cadastro de cupom sem código</dt>
  </br>
  <dd>Dado que se tenta cadastrar um cupom sem fornecer o código</dd>
  <dd>Então deve retornar uma mensagem de erro indicando que o código do cupom é obrigatório</dd>
</dl>
<dl>
  </br>
  <dt>Cenário: Cadastro de cupom com valor negativo</dt>
  </br>
  <dd>Dado que se tenta cadastrar um cupom com valor negativo</dd>
  <dd>Então deve retornar uma mensagem de erro indicando que o valor do cupom não pode ser negativo</dd>
</dl>
<dl>
  </br>
  <dt>Cenário: Cadastro de cupom com tipo de desconto inválido</dt>
  </br>
  <dd>Dado que se tenta cadastrar um cupom com um tipo de desconto não permitido</dd>
  <dd>Então deve retornar uma mensagem de erro indicando que o tipo de desconto é inválido</dd>
</dl>
<dl>
  </br>
  <dt>Cenário: Cadastro de cupom com descrição muito longa</dt>
  </br>
  <dd>Dado que se tenta cadastrar um cupom com uma descrição que ultrapassa o limite de caracteres permitido</dd>
  <dd>Então deve retornar uma mensagem de erro indicando que a descrição é muito longa</dd>
</dl>
