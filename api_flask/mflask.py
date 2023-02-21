import requests

url = 'http://localhost:5000/produtos'

data = {
    'nomeproduto': 'Chavroso',
    'nomefantasia': 'Chavroso',
    'valor': 22.95,
    'descricao': "...",
    'avaliacao': 0,
    'disponibilidade': 1,
    'qtd': 1,
    'grupo': 1,
}


response = requests.post(url, json=data)