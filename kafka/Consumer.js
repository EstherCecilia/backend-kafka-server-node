const kafka = require('kafka-node');
const config = require('./config/index');

class KafkaConsumer {
    constructor() {
        this.client = new kafka.KafkaClient({ kafkaHost: config.kafka.kafkaHost });
        this.consumer = new kafka.Consumer(this.client, [{ topic: config.kafka.topic }]);
    }

    start() {
        this.consumer.on('message', function (message) {
            console.log('Mensagem recebida:', message);
        });

        this.consumer.on('error', function (err) {
            console.error(err);
        });
    }
}

module.exports = KafkaConsumer;
