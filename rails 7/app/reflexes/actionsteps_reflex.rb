# frozen_string_literal: true

class ActionstepsReflex < ApplicationReflex
  def destroy
    Actionstep.find_by(id: element.dataset[:id])&.destroy
  end

  def toggle
    Actionstep.find(element.dataset[:id]).toggle!(:active)
  end

end
