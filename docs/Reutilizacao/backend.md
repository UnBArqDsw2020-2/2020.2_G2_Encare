# Reutilização no Back-end

A reutilização de software baseia-se no uso de conceitos, produtos ou soluções previamentes elaboradas ou adiquiridas para a criação de um novo software, com o objetivo de melhorar a qualidade, produtividade e reduzir tempo e custos de projeto.

Reusar um produto significa poder reutilizar partes (ou o todo) de um sistema desenvolvido anteriormente, como: especificações, módulos de um projeto, arquitetura e código fonte.

## _Frameworks_

### Django

Django é um _framework_ Python de alto nível que encorja o desenvolvimento rápido e um design limpo e pragmático. Construído por desenvolvedores experientes, ele cuida de grande parte do trabalho de desenvolvimento da Web, para que você possa se concentrar em escrever seu aplicativo sem precisar reinventar a roda. É gratuito e de código aberto. Principais características do _framework_:

- Projetado para acelerar o desenvolvimento;
- Alta escalabilidade;
- Oferece alta segurança;
- Muito versátil.

#### Hot-Spots

- Classe base para a definição das [Models](https://docs.djangoproject.com/en/3.2/topics/db/models/);
- Classe base para a definição das [Migrations](https://docs.djangoproject.com/en/3.2/topics/migrations/);
- Estrutura de organização/pastas do projeto.

#### Frozen-Spots

- [Referência de campos das Models](https://django-portuguese.readthedocs.io/en/1.0/ref/models/fields.html);
- [Objetos de requisição e resposta](https://django-portuguese.readthedocs.io/en/1.0/ref/request-response.html#django.http.HttpRequest);
- Dentre outros objetos e funções nativos do django, como o [File](https://django-portuguese.readthedocs.io/en/1.0/ref/files/file.html).

## Bibliotecas

### Google Maps Services Python

[Esta biblioteca](https://github.com/googlemaps/google-maps-services-python) traz os serviços da web da plataforma do Google Maps para aplicações Python.

#### Aplicação no Projeto

O código a seguir aplica o padrão de projeto **Proxy** e utiliza um método fornecido pela biblioteca para obter a distância entre um estabelecimento e um usuário da aplicação.

```python
import re
import googlemaps
from abc import ABCMeta, abstractmethod

class GoogleMapsInterface():
    __metaclass__ = ABCMeta

    @abc.abstractmethod
    def getDistance():
        raise NotImplementedError

class ProxyGoogleMaps():
    def __init__(self):
        self.googleMapsServices = googlemaps.Client(key='MY_KEY')

    def checkGeolocation(coords) -> bool:
        patternLat = 'regex_lat'
        patternLng = 'regex_lng'
        return re.search(patternLat, coords.lat) and re.search(patternLng, coords.lng)

    def getDistance(self, source, destination) -> float:
        if checkGeolocation(source) and checkGeolocation(destination):
            return self.googleMapsServices.distance_matrix(origins=source, destinations=destination)
```

## Serviços

### REST

_Representational State Transfer_ (REST), em português Transferência Representacional de Estado, é um estilo de arquitetura de software que define um conjunto de restrições a serem usadas para a criação de _web services_(serviços Web). Principais características do REST:

- Ele usa o protocolo HTTP (verbos, _accept_, _headers_, códigos de estado HTTP, _Content-Type_) de forma explícita e representativa para se comunicar. URIs são usados para expor a estrutura do serviço. Utiliza uma notação comum para transferência de dados como XML(_Extensible Markup Language_) ou JSON(_JavaScript Object Notation_).
- Não possui estado entre essas comunicações, ou seja, cada comunicação é independente e uniforme (padronizada) precisando passar toda informação necessária.
- Ele deve facilitar o cache de conteúdo no cliente.
- Deve ter clara definição do que faz parte do cliente e do servidor. O cliente não precisa saber como o servidor armazena dados, por exemplo. Assim cada implementação não depende da outra e se torna mais escalável.

#### Aplicação no Projeto

A notação escolhida para tranferência de dados foi a JSON, pois essa notação é bastante simplificada e vem sendo amplamente utilizada em aplicações Web.

A tabela a seguir exemplifica os _endpoints_ utilizados para a API REST de estabelecimentos da aplicação. 

| _Endpoint_                               | Verbo Http | Descrição                                       |
| ---------------------------------------- | ---------- | ----------------------------------------------- |
| baseUri/establishments                   | GET        | Lista ou filtra os estabelecimentos cadastrados |
| baseUri/establishments                   | POST       | Cria um novo estabelecimento                    |
| baseUri/establishments                   | PUT        | Atualiza um estabelecimento cadastrado          |
| baseUri/establishments/{establishmentId} | GET        | Recupera um estabelecimento a partir do Id      |
| baseUri/establishments/{establishmentId} | DELETE     | Deleta um estabelecimento a partir do Id        |

## Referências

- Reutilização de Software - Revista Engenharia de Software Magazine 39 . Disponível em: <https://www.devmedia.com.br/reutilizacao-de-software-revista-engenharia-de-software-magazine-39/21956>. Acesso em: 21 de abril de 2021.
- Django Project. Disponível em: <https://www.djangoproject.com/>. Acesso em: 22 abril de 2021.
- 8 Unique Features of Django that Makes it Better Framework. Data Flair. <https://data-flair.training/blogs/django-features/>. Acesso em: 22 abril de 2021.
- REST. Wikipedia. Disponível em: <https://pt.wikipedia.org/wiki/REST>. Acesso em: 22 abril de 2021.

## Versionamento

| Data       | Nome                                           | Detalhes                                              | Versão |
| ---------- | ---------------------------------------------- | ----------------------------------------------------- | ------ |
| 22/04/2021 | João Baraky, Nícalo Ribeiro e Gustavo Nogueira | Criação do documento de reutilização do back-end      | 0.1    |
| 22/04/2021 | João Baraky, Nícalo Ribeiro e Gustavo Nogueira | Adição da notação de transferência de dados escolhida | 0.2    |
