const KafkaProducer = require('./kafka/Producer');
const KafkaConsumer = require('./kafka/Consumer');
const config = require('./kafka/config/index');


function runProducerConsumer() {
    console.log('Starting Producer/Consumer...');
    try {
        const producer = new KafkaProducer();
        const consumer = new KafkaConsumer();

        // Envia uma mensagem a cada intervalo configurado
        setInterval(() => {
            const mockMessage = `Sample Message - ${new Date()}`;
            producer.sendMessage(mockMessage);
        }, config.producerInterval);

        // Inicia o consumidor
        consumer.start();
    } catch (error) {
        console.error('Error in runProducerConsumer:', error);
    }
}

runProducerConsumer();