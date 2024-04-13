import amqp  from 'amqplib'


const connection = await amqp.connect('amqps://');
const channel = await connection.createChannel();
const queueName = 'celery';