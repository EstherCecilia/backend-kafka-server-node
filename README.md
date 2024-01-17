# Kafka Producer-Consumer Simulator

This project is a simple Node.js application that simulates a Kafka producer and consumer. It utilizes the `kafka-node` library to interact with Apache Kafka. The producer sends mock messages to a Kafka topic at specified intervals, and the consumer listens to the same topic, logging the received messages.

## Introduction

Kafka is a distributed event streaming platform widely used for building real-time data pipelines and streaming applications. This application provides a basic simulation of a Kafka setup, demonstrating the interaction between a producer that sends messages and a consumer that receives and logs these messages.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js and npm
- Docker
- Docker Compose

## Docker Compose

To simplify the setup, this project includes a `docker-compose.yml` file. Docker Compose allows you to define and run multi-container Docker applications.

1. Start the Kafka broker:

    ```bash
    docker-compose up -d
    ```

2. Verify that Kafka and Zookeeper containers are running:

    ```bash
    docker-compose ps
    ```

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/your-repository.git
    ```

2. Navigate to the project directory:

    ```bash
    cd your-repository
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Configuration

Update Kafka broker settings in `config/index.js`:

```javascript
module.exports = {
    kafka: {
        kafkaHost: 'localhost:9092',
        topic: 'local-kafka-case-events',
    },
    producerInterval: 5000,
};
