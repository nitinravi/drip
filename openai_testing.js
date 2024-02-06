import OpenAI from "openai";
import readline from "readline";

const openai = new OpenAI({
    apiKey: "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"
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function main() {
    let imagePrompt = "";
    rl.question("Enter your design: ", async (user_prompt) => {
        const stream = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                { role: "system", content: "You are a bot designed to enhance the Users's input for a design and you should create a hyper detailed prompt for the user request, the main aim is to use this prompt on dalle-e to generate pics for a t-shirt design, another thing is the image shouldn't have other things apart from the object/character mentioned and background should be transparent unless the user asks to generate with the background. This promt should be maximum of 1000 characters. The image generated should be png. Don’t justify your answers. Don’t give information not mentioned in the CONTEXT INFORMATION. If information is given out of context then reply telling 'Cannot process your request' and end " },
                { role: "user", content: user_prompt }
            ],
            stream: true,
        });
        for await (const chunk of stream) {
            if (chunk.choices[0].delta.content !== null) {
                imagePrompt += chunk.choices[0].delta.content;
            }
            // process.stdout.write(chunk.choices[0]?.delta?.content || "");
        }
        // process.stdout.write("\nImage prompt:" + imagePrompt);

        if (imagePrompt.includes("Cannot process your request")) {
            process.stdout.write("Cannot process your design. Please try again with a different design");
        } else {
            const response = await openai.images.generate({
                model: "dall-e-3",
                prompt: imagePrompt,
                size: "1024x1024",
                quality: "standard",
                n: 1
            });

            process.stdout.write("\nImage URL:" + response.data[0].url);

            rl.close();
        }
    });
}

main();