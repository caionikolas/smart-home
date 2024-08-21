# smart-home

- Criar uma API que irá gerenciar dispositivos de uma certa residência
- Os dispositivos ficam em certos lugares/Ambiente da residência (Ex:sala, cozinha, banheiro, quarto, etc.)
- Deve ser possível criar, atualizar e remover um ambiente(local da residência)
- Só será possível remover um ambiente que não possuir dispositivos
- Será possível adicionar dispositivos em um ambiente

##

- Classe Ambiente: descrição, ícone, itens.
- Class Dispositivo: descrição, icone, estado-conexão, status(ligado/desligado)
- Será possível mover dispositivos de um ambiente para outro
  
Elaborar o Contrato da API para a descrição acima. 

No contrato incluir:

Especificação dos Objetos/Classe como no exemplo abaixo. E em seguida a lista das Operações.

Exemplo de Objeto:
{Objeto Ambiente}
{  
 id: string
 nome: string
 descricao: string 
 icone: string
 data_criacao: datetime(iso 8601) 
itens: [Item]
}

Atributos das Operações:
Método HTTP
Path
Parâmetros/Tipo
Body
Response Status Code: Pode ter mais de um
Response Body
