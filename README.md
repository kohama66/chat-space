# README

## usersテーブル

|Column|Type|Option|
|------|----|------|
|name|string|null: false|
|email|string|null: false, unique: true|
|password|string|null: false|

### Association
- has_many :messages
- has_many :groups, through: :users_groups
- has_many :users_groups

## groupsテーブル

|Column|Type|Option|
|------|----|------|
|name|string|null: false|

### Association
- has_many :messages
- has_many :users, through: :users_groups
- has_many :users_groups
## messagesテーブル

|Column|Type|Option|
|------|----|------|
|body|text|
|image|string|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## users_groupsテーブル

|Column|Type|Option|
|------|----|------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group