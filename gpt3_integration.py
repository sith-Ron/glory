import openai

# Set your OpenAI API key
openai.api_key = 'YOUR_OPENAI_API_KEY'

# Function to interact with the GPT-3 model
def get_gpt3_response(prompt):
    response = openai.Completion.create(
      engine="davinci",
      prompt=prompt,
      max_tokens=150
    )
    return response.choices[0].text.strip()
