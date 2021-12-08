import { SmsNotifier, SlackNotifier,  ViberNotifier, GmailNotifier, TelegramNotifier } from './Notifier';

class FabricNotifier {
    makeNotifier(notifier) {
        let Messenger = null;

        switch(notifier.name) {
            case('sms'):
                Messenger = SmsNotifier;
                break;
            case('mail'):
                Messenger = GmailNotifier;
                break;
            case('telegram'):
                Messenger = TelegramNotifier;
                break;   
            case('viber'):
                Messenger = ViberNotifier;
                break;   
            case('slack'):
                Messenger = SlackNotifier;
                break; 
        }

        return new Messenger(notifier);
    }
}

export default FabricNotifier;