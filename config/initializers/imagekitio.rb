ImageKitIo.configure do |config|
    if Rails.env.development?
      config.public_key = ENV["PUBLIC_KEY"]
      config.private_key = ENV["PRIVATE_KEY"]
      config.url_endpoint = ENV["URL_ENDPOINT"]
    end

    if Rails.env.production?
        config.public_key = process.env.PUBLIC_KEY
        config.private_key = process.env.PRIVATE_KEY
        config.url_endpoint = process.env.URL_ENDPOINT
      end

    config.service = :carrierwave
  end