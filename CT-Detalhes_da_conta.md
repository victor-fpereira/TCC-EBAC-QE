<h4>Caso de teste 1: Recuperação de Senha - Cenário Positivo</h4>
<dl>
  </br>
  <dt>Pré-condições:</dt>
  </br>
  <dd>O usuário está registrado no sistema.</dd>
  <dd>O usuário conhece o e-mail associado à sua conta.</dd>
</dl>
<dl>
  </br>
  <dt>Passos:</dt>
  </br>
  <dd>1. O usuário acessa a página de login.</dd>
  <dd>2. O usuário clica na opção "Esqueceu sua senha?".</dd>
  <dd>3. O usuário insere o e-mail associado à sua conta.</dd>
  <dd> 4. O usuário clica no botão de recuperação de senha.</dd>
</dl>
<dl>
  </br>
  <dt>Resultado Esperado:</dt>
  </br>
  <dd>O sistema exibe uma mensagem de sucesso indicando que as instruções para a recuperação de senha foram enviadas para o e-mail do usuário.</dd>
  <dd>Um e-mail é enviado ao usuário com um link de recuperação de senha.</dd>
</dl>
</br>
<h4>Caso de teste 2: Recuperação de Senha - Cenário Negativo (E-mail Inválido)</h4>
<dl>
  </br>
  <dt>Pré-condições:</dt>
  </br>
  <dd>O usuário está registrado no sistema.</dd>
</dl>
<dl>
  </br>
  <dt>Passos:</dt>
  </br>
  <dd>1. O usuário acessa a página de login.</dd>
  <dd>2. O usuário clica na opção "Esqueceu sua senha?".</dd>
  <dd>3. O usuário insere um e-mail inválido ou não associado à sua conta.</dd>
  <dd>4. O usuário clica no botão de recuperação de senha.</dd>
</dl>
<dl>
  </br>
  <dt>Resultado Esperado:</dt>
  </br>
  <dd>O sistema exibe uma mensagem de erro indicando que o e-mail fornecido não está associado a nenhuma conta.</dd>
</dl>
</br>
<h4>Caso de teste 3: Registro de Novo Usuário - Cenário Positivo</h4>
<dl>
  </br>
  <dt>Pré-condições:</dt>
  </br>
  <dd>O usuário não está registrado no sistema.</dd>
  <dd>O usuário fornece informações válidas para registro.</dd>
</dl>
<dl>
  </br>
  <dt>Passos:</dt>
  </br>
  <dd>1. O usuário acessa a página de registro.</dd>
  <dd>2. O usuário preenche os campos obrigatórios, incluindo primeiro nome, último nome, e-mail e senha.</dd>
  <dd>3. O usuário clica no botão de confirmação de registro.</dd>
</dl>
<dl>
  </br>
  <dt>Resultado Esperado:</dt>
  </br>
  <dd>O sistema exibe uma mensagem de sucesso indicando que o registro foi concluído com êxito.</dd>
  <dd>O usuário é redirecionado para a página de login, onde pode agora utilizar suas novas credenciais para entrar.
</dd>
</dl>
</br>
<h4>Caso de Teste 4: Registro de Novo Usuário - Cenário Negativo (E-mail Já Registrado)</h4>
<dl>
  </br>
  <dt>Pré-condições:</dt>
  </br>
  <dd>O usuário já possui uma conta registrada com o e-mail que está sendo usado para o novo registro.</dd>
</dd>
</dl>
<dl>
  </br>
  <dt>Passos:</dt>
  </br>
  <dd>1. O usuário acessa a página de registro.</dd>
  <dd>2. O usuário preenche os campos obrigatórios, incluindo um e-mail já registrado no sistema.</dd>
  <dd>3. O usuário clica no botão de confirmação de registro.</dd>
</dd>
</dl>
<dl>
  </br>
  <dt>Resultado Esperado:</dt>
  </br>
  <dd>O sistema exibe uma mensagem de erro indicando que o e-mail fornecido já está associado a uma conta existente.</dd>
  <dd>O registro não é concluído, e o usuário é solicitado a fornecer um e-mail diferente ou acessar a página de login para recuperar sua senha, se necessário.</dd>
</dl>
