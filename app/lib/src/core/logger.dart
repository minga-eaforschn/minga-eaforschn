import 'package:logger/logger.dart';

import 'get_it/get_it.dart';

Logger getLogger() => Logger(
      printer: PrettyPrinter(
        printTime: true,
      ),
    );

mixin LoggerProvider {
  Logger get logger => getIt<Logger>();
}
