# frozen_string_literal: true

class FeedsReflex < ApplicationReflex
  def destroy
    Feed.find_by(id: element.dataset[:id])&.destroy
  end

  def toggle
    Feed.find(element.dataset[:id]).toggle!(:active)
  end
end
