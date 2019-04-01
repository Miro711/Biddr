class ApplicationController < ActionController::API
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
    private
    def current_user
        if session[:user_id].present?
        @current_user ||= User.find_by(id: session[:user_id])
        end
    end

    def authenticate_user!
        unless current_user.present?
          render json: {status: 401}, status: 401
        end
    end

    def record_invalid(error)
        record = error.record # instance of model that failed validation

        errors = record.errors.map do |field, message|
          {
            type: error.class.to_s,
            record_type: record.class.to_s,
            field: field,
            message: message
          }
        end

        render(
          json: { status: 422, errors: errors },
          status: 422
        )
    end
end
