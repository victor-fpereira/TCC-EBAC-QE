<h4>Caso de Teste 1: Visualização da Lista de Pedidos - Cenário Positivo</h4>
<dl>
  </br>
  <dt>Pré-condições:</dt>
  </br>
  <dd>O usuário possui pelo menos um pedido registrado na sua conta.</dd>
</dl>
<dl>
  </br>
  <dt>Passos:</dt>
  </br>
  <dd>O usuário acessa a seção de "Acompanhamento de Pedidos" na sua conta.</dd>
  <dd>O usuário visualiza a lista de pedidos registrados, incluindo detalhes como número do pedido, data da compra e status atual.</dd>
</dl>
<dl>
  </br>
  <dt>Resultado Esperado:</dt>
  </br>
  <dd>A lista de pedidos é exibida corretamente, com informações precisas e atualizadas.</dd>
  <dd>Os pedidos são apresentados em ordem cronológica, proporcionando uma visão clara do histórico de compras.</dd>
</dl>
</br>
<h4>Caso de Teste 2: Detalhes do Pedido - Cenário Positivo</h4>
<dl>
  </br>
  <dt>Pré-condições:</dt>
  </br>
  <dd>O usuário possui pelo menos um pedido registrado na sua conta.</dd>
</dl>
<dl>
  </br>
  <dt>Passos:</dt>
  </br>
  <dd>O usuário seleciona um pedido específico na lista de pedidos.</dd>
  <dd>O usuário é redirecionado para a página de detalhes do pedido.</dd>
  <dd>O usuário verifica informações detalhadas, como lista de itens comprados, quantidades, preços, subtotal e status atual.</dd>
</dl>
<dl>
  </br>
  <dt>Resultado Esperado:</dt>
  </br>
  <dd>A página de detalhes do pedido exibe informações precisas e detalhadas.</dd>
  <dd>As informações refletem com precisão o conteúdo do pedido e seu status atual.</dd>
</dl>
</br>
<h4>Caso de Teste 3: Rastreamento de Envio - Cenário Positivo</h4>
<dl>
  </br>
  <dt>Pré-condições:</dt>
  </br>
  <dd>O pedido selecionado está em trânsito e possui um número de rastreamento válido.</dd>
</dl>
<dl>
  </br>
  <dt>Passos:</dt>
  </br>
  <dd>O usuário acessa a página de detalhes do pedido em trânsito.</dd>
  <dd>O usuário verifica a presença de um número de rastreamento.</dd>
  <dd>O usuário clica no link de rastreamento para visualizar as atualizações de envio.</dd>
</dl>
<dl>
  </br>
  <dt>Resultado Esperado:</dt>
  </br>
  <dd>O número de rastreamento é exibido corretamente.</dd>
  <dd>O link de rastreamento redireciona o usuário para uma página externa ou modal que mostra as atualizações de envio em tempo real.</dd>
</dl>
</br>
<h4>Caso de Teste 4: Cancelamento de Pedido - Cenário Positivo</h4>
<dl>
  </br>
  <dt>Pré-condições:</dt>
  </br>
  <dd>O usuário possui um pedido em estado "Processando" que ainda não foi enviado.</dd>
</dl>
<dl>
<dl>
  </br>
  <dt>Passos:</dt>
  </br>
  <dd>O usuário acessa a página de detalhes do pedido em estado "Processando".</dd>
  <dd>O usuário encontra a opção para cancelar o pedido.</dd>
  <dd>O usuário confirma o cancelamento do pedido.</dd>
</dl>
<dl>
<dl>
  </br>
  <dt>Resultado Esperado:</dt>
  </br>
  <dd>O pedido é cancelado com sucesso.</dd>
  <dd>O status do pedido é atualizado para refletir o cancelamento, e o usuário recebe uma confirmação visual e, se configurado, uma notificação por e-mail.</dd>
</dl>
<dl>
