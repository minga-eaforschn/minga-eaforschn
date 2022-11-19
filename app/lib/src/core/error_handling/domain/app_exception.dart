class AppException implements Exception {
  const AppException(this.message, {this.code, this.details});

  final String message;
  final String? code;
  final String? details;

  @override
  String toString() =>
      '$runtimeType{message: $message, code: $code, details: $details}';

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is AppException &&
          runtimeType == other.runtimeType &&
          message == other.message &&
          code == other.code &&
          details == other.details;

  @override
  int get hashCode => message.hashCode ^ code.hashCode ^ details.hashCode;
}
