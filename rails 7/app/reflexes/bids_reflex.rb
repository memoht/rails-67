# frozen_string_literal: true

class BidsReflex < ApplicationReflex
  def retire
    Bid.find(element.dataset[:id]).retire
  end
end
