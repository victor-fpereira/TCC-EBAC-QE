| CT-0001          | Adicionar item ao carrinho |
| ---------------- | -------------------------- |
| Situação         | Concluído                  |
| Projeto          | EBAC-SHOP                  |
| Versões afetadas | 1.0                        |

</br>
<h3>Descrição dos cenários em BDD </h3>
<dl>
  </br>
  <dt>Cenário: Adição de itens ao carrinho</dt>
  </br>
  <dd>Dado que o cliente deseja adicionar itens ao carrinho</dd>
  <dd>Quando adiciona 5 unidades do Produto A, 3 unidades do Produto B e 2 unidades do Produto C ao carrinho </dd>
  <dd>Então os itens devem ser adicionados corretamente ao carrinho sem ultrapassar o limite de 10 unidades por produto</dd>
</dl>
<dl>
  </br>
  <dt>Cenário: Limite de unidades por produto</dt>
  </br>
  <dd>Dado que o cliente tenta adicionar 12 unidades do Produto D ao carrinho</dd>
  <dd>Então deve exibir uma mensagem de erro informando que não é permitido adicionar mais de 10 unidades do mesmo produto ao carrinho</dd>
</dl>
<dl>
  </br>
  <dt>Cenário: Limite de valor total do carrinho</dt>
  </br>
  <dd>Dado que o cliente adiciona produtos ao carrinho até atingir o valor de R$ 1.000,00</dd>
  <dd>Então o sistema deve impedir a adição de mais produtos, exibindo uma mensagem de erro, pois ultrapassou o limite de R$ 990,00</dd>
</dl>
<dl>
  </br>
  <dt>Cenário: Cupom de desconto para valores entre R$ 200 e R$ 600</dt>
  </br>
  <dd>Dado que o cliente adiciona produtos ao carrinho totalizando R$ 400,00</dd>
  <dd>Então deve ser aplicado automaticamente um cupom de desconto de 10% sobre o valor total do carrinho</dd>
</dl>
<dl>
  </br>
  <dt>Cenário: Cupom de desconto para valores acima de R$ 600</dt>
  </br>
  <dd>Dado que o cliente adiciona produtos ao carrinho totalizando R$ 700,00</dd>
  <dd>Então deve ser aplicado automaticamente um cupom de desconto de 15% sobre o valor total do carrinho</dd>
</dl>
<dl>
  </br>
  <dt>Cenário: Combinação de descontos</dt>
  </br>
  <dd>Dado que o cliente adiciona produtos ao carrinho totalizando R$ 550,00, sendo que alguns produtos estão na faixa de R$ 200 a R$ 600</dd>
  <dd>Então deve ser aplicado o cupom de 10% apenas sobre os produtos que se encaixam na faixa de R$ 200 a R$ 600</dd>
</dl>
<dl>
  </br>
  <dt>Cenário: Remoção de itens do carrinho</dt>
  </br>
  <dd>Dado que o cliente adiciona alguns itens ao carrinho e em seguida remove alguns deles</dd>
  <dd>Então o carrinho deve ser atualizado corretamente, refletindo as adições e remoções realizadas</dd>
</dl>
