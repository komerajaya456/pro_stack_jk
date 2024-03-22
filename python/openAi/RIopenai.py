from openai import OpenAI
API_key="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"
client = OpenAI(api_key=API_key)

com=client.chat.completions.create(
    model="gpt-3.5-turbo",

    messages=[

        {'role':'system','content':'explain ur idea'},
        {'role':'user','content':'explain openai in 1 line of company'}
    ]
)