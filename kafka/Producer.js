const kafka = require('kafka-node');
const config = require('./config/index');

class KafkaProducer {
    constructor() {
        this.client = new kafka.KafkaClient({ kafkaHost: config.kafka.kafkaHost });
        this.producer = new kafka.Producer(this.client);
    }

    sendMessage(message) {
        const payloads = [{ topic: config.kafka.topic, messages: message }];

        this.producer.send(payloads, function (err, data) {
            if (err) {
                console.error(err);
            } else {
                console.log('Mensagem enviada:', data);
            }
        });
    }
}

module.exports = KafkaProducer;
