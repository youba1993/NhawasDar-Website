# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[6.1].define(version: 2022_10_08_224716) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "contracts", force: :cascade do |t|
    t.float "rent_amount"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_id"
    t.bigint "house_id"
    t.bigint "landlord_id"
    t.index ["house_id"], name: "index_contracts_on_house_id"
    t.index ["landlord_id"], name: "index_contracts_on_landlord_id"
    t.index ["user_id"], name: "index_contracts_on_user_id"
  end

  create_table "house_images", force: :cascade do |t|
    t.string "image_url"
    t.string "file_name"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "house_id"
    t.index ["house_id"], name: "index_house_images_on_house_id"
  end

  create_table "house_likes", force: :cascade do |t|
    t.integer "count"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_id"
    t.bigint "house_id"
    t.index ["house_id"], name: "index_house_likes_on_house_id"
    t.index ["user_id"], name: "index_house_likes_on_user_id"
  end

  create_table "house_reviews", force: :cascade do |t|
    t.text "comment"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_id"
    t.bigint "house_id"
    t.index ["house_id"], name: "index_house_reviews_on_house_id"
    t.index ["user_id"], name: "index_house_reviews_on_user_id"
  end

  create_table "houses", force: :cascade do |t|
    t.string "adress"
    t.integer "square_footage"
    t.integer "price"
    t.string "house_type"
    t.integer "num_beds"
    t.integer "num_baths"
    t.boolean "air_cond"
    t.boolean "elevator"
    t.boolean "furnished"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "landlord_id"
    t.index ["landlord_id"], name: "index_houses_on_landlord_id"
  end

  create_table "landlords", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "company_name"
    t.string "email"
    t.integer "company_phone"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
