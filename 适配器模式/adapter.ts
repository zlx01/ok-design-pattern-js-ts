interface Logger {
  info(message: string): Promise<void>
}

interface CloudLogger {
  sendToServer(message: string, type: string): Promise<void>
}

class AliLogger implements CloudLogger {
  public async sendToServer(message: string, type: string): Promise<void> {
    console.log(message)
    console.log('This Message was saved with AliLogger')
  }
}

// 对象适配器：通过组合实现
class CloudLoggerAdapter implements Logger {
  protected cloudLogger: CloudLogger

  constructor(cloudLogger: CloudLogger) {
    this.cloudLogger = cloudLogger
  }

  public async info(message: string): Promise<void> {
    await this.cloudLogger.sendToServer(message, 'info')
  }
}

class NotificationService {
  protected logger: Logger

  constructor(logger: Logger) {
    this.logger = logger
  }

  public async send(message: string): Promise<void> {
    await this.logger.info(`Notification sent: ${message}`)
  }
}

(async () => {
  const aliLogger = new AliLogger()
  const cloudLoggerAdapter = new CloudLoggerAdapter(aliLogger)
  const notificationService = new NotificationService(cloudLoggerAdapter)
  await notificationService.send('发送消息')
})()
