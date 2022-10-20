const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let skills = {
    'chain analysis': {
        'module': 'general',
        'sub-module': 'general',
        'instructions': 'Describe the problem behavior. Describe the prompting event that started the chain of events leading to the problem behavior. Describe any factors before the event that made you more vulnerable to moving down the chain of events. Desceibe the consequences of the problem behavior. Describe skillfull behavior to raplce problem links in the chain of events. Develop prevention plans to reduce vulnerability to stressful events. Repair important or significant consequences of the problem behavior.',
    },
    'stone flake on the lake': {
        'module': 'mindfulness',
        'sub-module': 'wise mind',
        'instructions': "Imagine that you are by a clear blue lake on a beautiful sunny day. Then imagine that you are a small flake of stone, flat and light. Imagine that you have been tossed out onto the lake and are now gently, slowly, floating through the calm, clear blue water to the lake's smooth, sandy bottom. Notice what you see, what you feel as you float down, perhaps in slow circles, floating toward the bottom. As you reach the bottom of the lake, settle your attention there within yourself. Notice the serenity of the lake; become aware of the calmness and quiet deep within. As you reach the center of your self, settle your attention there.",
    },
    'DEAR MAN': {
        'module': 'interpersonal effectiveness',
        'sub-module': 'objectives effectiveness',
        'instructions': 'Describe the facts of the situation succinctly and accurately. Express your feelings and opinions about the situation using "I" statements. Assert yourself by asking for what you want or saying no clearly. Explain how this would be beneficial for the other person and if necessary the possible negative consequences of not getting what you want or need. Remember to reward desired behavior after the fact. Keep your focus on your goals. If necessary, repeat your ask, your no, or your opinions over and over again. Ignore attacks or threats. Appear confident in your body language. Negotiate, if needed, to get as close as possible to what you need. Be as flexible as you can without compromising your goals.',
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

cyclic
