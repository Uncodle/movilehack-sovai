# Só Vai

A plataforma da "Só Vai" é uma wallet para fazer pagamentos em eventos sem uso de qualquer tipo de cartão na hora do evento.

## Tecnologias
  
  * Java Spring Boot;
  * Mongo DB;
  * NodeJs

## Endpoints
  * POST = {host}/wallet/createWallet - Cria uma carteira digital e comunica os dados da carteira com a Zoop 
  para poder realizar transacoes reais.
    ** Cria a carteira com um cartao de credito;
    ** Com as API's da Zoop, cria um buyer, um token card e atrela o cartao ao buyer;
    ** Dados persistidos na base de dados.
    
    Payload (Exemplo): 
    ```
    {
	    "clientCpf": "46209635857",
	    "id": "1",
	    "expirationMonth" : "01",
	    "expirationYear" : "2020",
	    "holder" : "ZOOP SQUAD QA FACA NA CAVEIRA",
	    "cardNumber" : "4929256328394091",
	    "securityNumber" : "133",
	    "firstName": "gabriel",
	    "lastName": "dantas"
   }
    ```
    
  * POST = {host}/wavy/validateSms - Gera uma mensagem com um codigo, para validaçao da compra.
    ** Consome api da Wavy para disparar as mensagens.
    
    Payload (Exemplo): 
    ```
    {
      "cod" : "123",
	    "to"  : "5511954768351",
	    "message": "teste",
	    "carrier": "TIM"
    }
    ```
   * POST = {host}/wallet/pay - Realiza o pagamento efetivo da compra pela Zoop.
    
    Payload (Exemplo): 
    ```
      {    
          "amount": 100,
          "currency": "BRL",
          "clientCpf" : "46209635857",
          "description": "venda",
          "payment_type": "credit",
          "reference_id": "1234",
          "cod" : "12"
      }
   ```

