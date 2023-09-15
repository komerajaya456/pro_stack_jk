import json
dic={'neame':'komera'}
print("ho")
print("ho")
print(dic['neame'])
print(type(dic))
y=json.dumps(dic)
print(y)
f=open('data_dic.json')
u=json.loads(f)
for i in u:
    print(i)