# frozen_string_literal: true

class JobsReflex < ApplicationReflex
  def boost
    Job.find(element.dataset[:id]).toggle!(:boost)
  end

  def maxup
    Job.find(element.dataset[:id]).increment!(:views_max, by = 250)
  end

  def sponsor
    Job.find(element.dataset[:id]).sponsor
  end

  def resume
    job = Job.find(element.dataset[:id])
    job.sponsor
    job.increment!(:views_max, by = 150)
  end

  def pause
    Job.find(element.dataset[:id]).pause
  end

  def archive
    Job.find(element.dataset[:id]).archive
    Job.find(element.dataset[:id]).touch(:archived_at)
  end

  def destroy
    Job.find_by(id: element.dataset[:id])&.destroy
  end
end
