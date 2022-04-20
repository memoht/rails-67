# frozen_string_literal: true

class JobGroupsReflex < ApplicationReflex
  def destroy
    JobGroup.find_by(id: element.dataset[:id])&.destroy
  end

  def toggle
    JobGroup.find(element.dataset[:id]).toggle!(:active)
  end

  def destroy_actionstep
    Actionstep.find(element.dataset[:id])&.destroy
  end
end
