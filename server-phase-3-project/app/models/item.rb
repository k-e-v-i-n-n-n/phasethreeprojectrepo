class Item < ActiveRecord::Base

    belongs_to :designer
    belongs_to :season

end