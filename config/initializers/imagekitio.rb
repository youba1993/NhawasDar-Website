ImageKitIo.configure do |config|
    if Rails.env.development?
      config.public_key = ENV["PUBLIC_KEY"]
      config.private_key = ENV["PRIVATE_KEY"]
      config.url_endpoint = ENV["URL_ENDPOINT"]
    end

    if Rails.env.production?
        config.public_key = proc.env.PUBLIC_KEY
        config.private_key = proc.env.PRIVATE_KEY
        config.url_endpoint = proc.env.URL_ENDPOINT
      end

    config.service = :carrierwave
  end