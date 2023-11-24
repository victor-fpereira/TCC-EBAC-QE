| CT-0002          | Login de usuário |
| ---------------- | -------------------------- |
| Situação         | Concluído                  |
| Projeto          | EBAC-SHOP                  |
| Versões afetadas | 1.0                        |

</br>
<h3>Descrição dos cenários em BDD</h3>
<dl>
  </br>
  <dt>Cenário: Login bem-sucedido</dt>
  </br>
  <dd>Dado que um usuário ativo insere as credenciais corretas</dd>
  <dd>Quando realiza o login</dd>
  <dd>Então o sistema deve permitir o login com sucesso</dd>
</dl>
<dl>
  </br>
  <dt>Cenário: Usuário inativo</dt>
  </br>
  <dd>Dado que um usuário inativo tenta fazer login</dd>
  <dd>Quando realiza o login</dd>
  <dd>Então o sistema deve exibir uma mensagem de erro informando que somente usuários ativos podem fazer login</dd>
</dl>
<dl>
  </br>
  <dt>Cenário: Erro no login ou senha</dt>
  </br>
  <dd>Dado que um usuário ativo insere um login válido, mas uma senha incorreta</dd>
  <dd>Quando realiza o login</dd>
  <dd>Então o sistema deve exibir uma mensagem de erro informando que o login ou a senha estão incorretos</dd>
</dl>
<dl>
  </br>
  <dt>Cenário: Travamento após 3 tentativas de senha incorreta</dt>
  </br>
  <dd>Dado que um usuário insere a senha incorreta por três vezes consecutivas</dd>
  <dd>Quando tenta fazer login novamente</dd>
  <dd>Então o sistema deve exibir uma mensagem informando que o usuário está temporariamente bloqueado</dd>
  <dd>E deve impedir qualquer tentativa de login por 15 minutos</dd>
</dl>
<dl>
  </br>
  <dt>Cenário: Login após o período de bloqueio</dt>
  </br>
  <dd>Dado que um usuário tenta fazer login após ter sido bloqueado</dd>
  <dd>Após aguardar 15 minutos</dd>
  <dd>Quando realizar o login</dd>
  <dd>Então o sistema deve permitir o login com sucesso</dd>
</dl>
<dl>
  </br>
  <dt>Cenário: Login após o período de bloqueio</dt>
  </br>
  <dd>Dado que um usuário tente fazer login após ter sido bloqueado</dd>
  <dd>Após aguardar 15 minutos</dd>
  <dd>Quando realizar o login</dd>
  <dd>Então o sistema deve permitir o login com sucesso</dd>
</dl>
<dl>
  </br>
  <dt>Cenário: Combinação de usuário e senha inválida</dt>
  </br>
  <dd>Dado que um usuário inexistente tenta fazer login com uma senha incorreta</dd>
  <dd>Quando realizar o login</dd>
  <dd>Então o sistema deve exibir uma mensagem de erro informando que o login</dd>
  <dd>Ou a senha estão incorretos</dd>
</dl>
<dl>
  </br>
  <dt>Cenário: Logout</dt>
  </br>
  <dd>Dado que um usuário está autenticado no sistema</dd>
  <dd>Quando realiza o logout</dd>
  <dd>Então o sistema deve encerrar a sessão do usuário</dd>
</dl>
<dl>
  </br>
  <dt>Cenário: Limite de tentativas de senha incorreta por sessão</dt>
  </br>
  <dd>Dado que um usuário insere a senha incorreta duas vezes</dd>
  <dd>E em seguida, insere a senha correta</dd>
  <dd>Quando realiza o login</dd>
  <dd>Então o sistema deve permitir o login corretamente após a segunda tentativa falha</dd>
  <dd>E não deve considerar o histórico de tentativas após um login bem-sucedido</dd>
</dl>
